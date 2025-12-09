export async function safeConfirm(message: string, options?: any): Promise<boolean> {
  // Use browser confirm for reliability
  // eslint-disable-next-line no-alert
  return Promise.resolve(window.confirm(message));
}

export async function safePrompt(message: string, defaultValue?: string): Promise<string | null> {
  try {
    // For prompt we still use browser implementation as Tauri ask() is for confirmation
    // eslint-disable-next-line no-alert
    return Promise.resolve(window.prompt(message, defaultValue));
  } catch (e) {
    return null;
  }
}

export default { safeConfirm, safePrompt };
