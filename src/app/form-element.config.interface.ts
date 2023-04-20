// src/app/form-element-config.interface.ts
export interface FormElementConfig {
  value?: any;
  label?: string;
  placeholder?: string;
  required?: boolean;
  visible?: boolean;
  visibilityCondition?: {
    targetElementId: string;
    targetValue: any;
  };
}
