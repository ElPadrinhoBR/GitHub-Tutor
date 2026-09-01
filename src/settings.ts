declare const chrome: {
  storage: {
    local: {
      get: (key: string) => Promise<Record<string, any>>;
      set: (value: Record<string, any>) => Promise<void>;
      onChanged: {
        addListener: (callback: (changes: Record<string, { newValue?: any }>) => void) => void;
      };
    };
  };
};

export type TutorSettings = {
  enabled: boolean;
  language: 'pt' | 'en' | 'es';
};

export const DEFAULT_SETTINGS: TutorSettings = {
  enabled: true,
  language: 'pt'
};

export function storageApi() {
  return chrome.storage.local;
}

export async function getSettings(): Promise<TutorSettings> {
  try {
    const result = await storageApi().get('gitTutorSettings');
    return {
      ...DEFAULT_SETTINGS,
      ...(result.gitTutorSettings ?? {})
    } as TutorSettings;
  } catch (err) {
    console.error('[Git Tutor] Error getting settings:', err);
    return DEFAULT_SETTINGS;
  }
}

export async function setSettings(next: Partial<TutorSettings>): Promise<void> {
  try {
    const current = await getSettings();
    const updated = { ...current, ...next };
    await storageApi().set({ gitTutorSettings: updated });
  } catch (err) {
    console.error('[Git Tutor] Error setting settings:', err);
  }
}
