import { getSettings, setSettings, storageApi } from './settings';

const enabledInput = document.getElementById('enabled') as HTMLInputElement | null;
const languageSelect = document.getElementById('language') as HTMLSelectElement | null;
const statusBox = document.getElementById('status') as HTMLDivElement | null;

const STATUS_TEXT: Record<'pt' | 'en' | 'es', Record<'enabled' | 'disabled', string>> = {
  pt: {
    enabled: 'Tutor ativo',
    disabled: 'Tutor desativado'
  },
  en: {
    enabled: 'Tutor active',
    disabled: 'Tutor disabled'
  },
  es: {
    enabled: 'Tutor activo',
    disabled: 'Tutor desactivado'
  }
};

async function renderSettings(): Promise<void> {
  const settings = await getSettings();

  if (enabledInput) enabledInput.checked = settings.enabled;
  if (languageSelect) languageSelect.value = settings.language;

  if (statusBox) {
    const label = settings.enabled ? STATUS_TEXT[settings.language].enabled : STATUS_TEXT[settings.language].disabled;
    statusBox.textContent = label;
    statusBox.classList.toggle('disabled', !settings.enabled);
    statusBox.style.background = settings.enabled
      ? 'rgba(34, 197, 94, 0.08)'
      : 'rgba(245, 158, 11, 0.08)';
    statusBox.style.borderColor = settings.enabled
      ? 'rgba(34, 197, 94, 0.3)'
      : 'rgba(245, 158, 11, 0.3)';
    statusBox.style.color = settings.enabled ? '#b7f7c9' : '#fbe5a7';
  }
}

async function saveAndRefresh(): Promise<void> {
  const enabled = enabledInput?.checked ?? true;
  const language = (languageSelect?.value as 'pt' | 'en' | 'es') ?? 'pt';

  await setSettings({ enabled, language });
  await renderSettings();
}

enabledInput?.addEventListener('change', saveAndRefresh);
languageSelect?.addEventListener('change', saveAndRefresh);

// Listen for storage changes to update UI if settings change from another popup/context
storageApi().onChanged.addListener(() => {
  void renderSettings();
});

void renderSettings();
