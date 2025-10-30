// Core types for the multilingual communication system
export interface Translation {
  original: string;
  translated: string;
  fromLanguage: string;
  toLanguage: string;
  culturalContext: CulturalContext;
  confidence: number;
  timestamp: Date;
  metadata?: TranslationMetadata;
}

export interface CulturalContext {
  formality: 'formal' | 'casual' | 'business';
  communicationStyle: 'direct' | 'indirect' | 'high_context';
  culturalVariant?: string;
  preserveHonorifics?: boolean;
  adaptToLocalCustoms?: boolean;
}

export interface TranslationMetadata {
  provider: string;
  model?: string;
  processingTime: number;
  alternatives?: string[];
  culturalNotes?: string[];
}

export interface SystemConfig {
  name: string;
  priorityLanguages: string[];
  defaultFormality: CulturalContext['formality'];
  realTime: boolean;
  integrationType: 'widget' | 'api' | 'webhook' | 'sdk';
  authentication?: AuthConfig;
  customization?: CustomizationConfig;
}

export interface AuthConfig {
  type: 'api_key' | 'oauth2' | 'jwt';
  endpoint?: string;
  scopes?: string[];
}

export interface CustomizationConfig {
  branding?: {
    colors: Record<string, string>;
    logo?: string;
    fonts?: string[];
  };
  features?: {
    enableVoice: boolean;
    enableVideo: boolean;
    enableFileTranslation: boolean;
  };
}

export interface TranslationProvider {
  name: string;
  translate(
    text: string,
    from: string,
    to: string,
    context?: CulturalContext
  ): Promise<Translation>;
  getSupportedLanguages(): Promise<string[]>;
  validateApiKey(key: string): Promise<boolean>;
}

export interface Integration {
  type: 'widget' | 'api' | 'webhook' | 'sdk';
  config: SystemConfig;
  initialize(): Promise<void>;
  processTranslation(request: TranslationRequest): Promise<Translation>;
  handleError(error: Error): void;
}

export interface TranslationRequest {
  text: string;
  fromLanguage: string;
  toLanguage: string;
  context?: CulturalContext;
  userId?: string;
  sessionId?: string;
  priority?: 'low' | 'normal' | 'high';
}

export interface LanguageCapabilities {
  code: string;
  name: string;
  rtl: boolean;
  culturalVariants: string[];
  supportedProviders: string[];
  qualityScore?: number;
}

export interface SystemMetrics {
  totalTranslations: number;
  averageLatency: number;
  errorRate: number;
  userSatisfaction?: number;
  topLanguagePairs: Array<{ from: string; to: string; count: number }>;
}