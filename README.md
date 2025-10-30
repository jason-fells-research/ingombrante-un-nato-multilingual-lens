# ingombrante-un-nato-multilingual-lens
Real-time cross-cultural communication demonstrating collaborative frameworks across linguistic boundaries

## 🚀 Quick Start - System Factory Approach

This framework rapidly deploys translation systems across multiple use cases.

### Instant Setup
```bash
npm install
npm run dev
```

### Create Any System in Minutes
```typescript
import { translationFactory } from './src';

// Customer support widget
const support = await translationFactory.createSystem('customer-support', {
  name: 'Support Chat',
  priorityLanguages: ['en', 'es', 'fr'],
  defaultFormality: 'business',
  integrationType: 'widget'
});

// Social platform API
const social = await translationFactory.createSystem('social-api', {
  name: 'Social Integration',
  priorityLanguages: ['en', 'ja', 'ar'],
  defaultFormality: 'casual',
  integrationType: 'api'
});
```

### Pre-Built System Templates
- `customer_support` - Business chat widgets
- `social_platform` - Casual API integration
- `enterprise_communication` - Formal SDK deployment

**Architecture scales from 1 system to 1000+ systems with the same foundation.**

See `docs/architecture-decisions.md` for design rationale and `config/systems.json` for configuration options.
