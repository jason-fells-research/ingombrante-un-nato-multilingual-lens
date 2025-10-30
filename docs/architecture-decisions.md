# Architecture Decision Records (ADRs)

Document key decisions as you build multiple systems. This saves massive time when scaling.

## ADR Template
```
# ADR-001: [Decision Title]

**Status:** Accepted | Proposed | Deprecated
**Date:** YYYY-MM-DD
**Context:** What problem are we solving?
**Decision:** What did we decide?
**Consequences:** What are the trade-offs?
```

## Decisions Made

### ADR-001: Configuration-Driven Multi-System Architecture
**Status:** Accepted
**Date:** 2025-10-30
**Context:** Need to build translation systems for multiple use cases (customer support, social platforms, enterprise) without rebuilding core logic each time.
**Decision:** Use `config/systems.json` to drive system behavior, with a factory pattern to create specialized instances.
**Consequences:**
- ✅ Rapid deployment of new systems
- ✅ Consistent behavior across systems
- ❌ Additional configuration complexity

### ADR-002: TypeScript-First Development
**Status:** Accepted
**Date:** 2025-10-30
**Context:** Need strong typing for cultural context and translation interfaces to prevent errors across multiple integrations.
**Decision:** Use TypeScript with comprehensive type definitions for all core interfaces.
**Consequences:**
- ✅ Compile-time error catching
- ✅ Better developer experience across teams
- ❌ Slight initial setup overhead

### ADR-003: Provider-Agnostic Translation Layer
**Status:** Accepted
**Date:** 2025-10-30
**Context:** Different systems may need different translation providers (cost, quality, features).
**Decision:** Abstract translation providers behind common interface, allow runtime switching.
**Consequences:**
- ✅ Flexibility in provider choice
- ✅ Easy A/B testing of providers
- ❌ Need to implement adapters for each provider

## Next Decisions Needed
- [ ] Authentication strategy (API keys vs OAuth2 vs JWT)
- [ ] Real-time communication protocol (WebRTC vs WebSocket vs both)
- [ ] Cultural context storage and learning mechanism
- [ ] Deployment strategy (Docker containers vs serverless functions)