# Containerize

```mermaid
%%{ init : { "flowchart" : { "curve" : "linear" }}}%%
flowchart LR
  users[[Users]]

  subgraph NodeJSMas["NodeJS MSA eco-system"]
    direction LR
    subgraph publicAccess["Public access"]
      fe[Frontend]
    end

    subgraph privateAccess["Private access"]
      be[Backend]
    end

    db[(Database)]
    cache[(Cache)]
  end

  users -- Browsers --> fe
  users x--x be

  fe -- JSON/HTTPS --> be

  be -- TCP --> db
  be -- TCP --> cache
```
