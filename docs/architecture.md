# Architecture

The TMS (training management system) has a few components, some of which are shared. Below is a mermaid diagram illustrating the relationship between the apps & packages within the codebase

```mermaid
---
Architecture
---
classDiagram
    Core_DB --> Core_Seeding
    Core_DB --> Core_Services
    Core_Domain --> Core_Services
    Core_Domain --> Core_Seeding
    
    Core_Domain --> APP_WEB_UI
    Core_Services --> APP_WEB_UI
    
    Core_Services --> API_GRAPHQL
    Core_Domain --> API_GRAPHQL
    Core_Domain --> APP_MOBILE
    API_GRAPHQL --> APP_MOBILE


    class Core_DB {
      Package containning database schemas & zod schemas for CRUD operations
    }
    class Core_Services {
      Pure backend functions executing business logic
    }
    class Core_Seeding {
      Script for seeding core database
    }
    class Core_Domain {
      Constants & type definitions that're domain-specific to the system
    }

    class APP_WEB_UI {
      Next.js web app (with tRPC APIs)
    }
    class APP_MOBILE {
      React Native App
    }
    class API_GRAPHQL {
      GraphQL API for mobile app & other clients
    }
```
