# Convention

Define documents/CI rules for convention (best practices) in NodeJS

## CI

- Eslint recommended rules
- Typescript eslint recommended rules
- Prettier formatter rules
- SonarJS recommended rules

## Naming convention

TBD

## Application architecture

```mermaid
%%{ init : { "theme" : "dark", "flowchart" : { "curve" : "linear" }}}%%

flowchart TD
  subgraph Overview architecture
    transport(Transport or Delivery\nAccept request from REST, RPC or any from client)
    service(Business or Service layer\nDo business logic)
    repository(Repository\nWork with local/remote storages)
    model(Entity or Model\nDefine data structures)
  end

  subgraph Entity
    entity("Entity (Model packages)")
    transportE(Transport)
    businessE(Business)
    repositoryE(Repository)
  end

  transport --> service --> repository --> model

  entity --> transportE
  entity --> businessE
  entity --> repositoryE
```
