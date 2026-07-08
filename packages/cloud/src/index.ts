export class CloudService {
  private static _instance?: CloudService;

  static createInstance(..._args: any[]): Promise<CloudService> {
    if (!this._instance) {
      this._instance = new CloudService();
    }
    return Promise.resolve(this._instance);
  }

  static hasInstance(): boolean { return false; }
  static isEnabled(): boolean { return false; }
  static get instance(): CloudService { return this._instance!; }

  captureEvent(..._args: any[]): void {}
  getUserInfo(..._args: any[]): null { return null; }
  isAuthenticated(..._args: any[]): boolean { return false; }
  isCloudAgent(..._args: any[]): boolean { return false; }
  getOrganizationMemberships(..._args: any[]): never[] { return []; }
  getOrganizationId(..._args: any[]): string | undefined { return undefined; }
  getStoredOrganizationId(..._args: any[]): string | null { return null; }
  getAllowList(..._args: any[]): { allowAll: boolean; providers: Record<string, { allowAll: boolean; models?: string[] }> } { return { allowAll: true, providers: {} }; }
  getOrganizationSettings(..._args: any[]): { version: number } | null { return null; }
  login(..._args: any[]): Promise<void> { return Promise.resolve(); }
  logout(..._args: any[]): Promise<void> { return Promise.resolve(); }
  switchOrganization(..._args: any[]): Promise<void> { return Promise.resolve(); }
  handleAuthCallback(..._args: any[]): Promise<void> { return Promise.resolve(); }
  off(..._args: any[]): void {}
  on(..._args: any[]): void {}
}

export const getRooCodeApiUrl = () => "https://app.roocode.com";
export const PRODUCTION_CLERK_BASE_URL = "https://clerk.roocode.com";
export const getClerkBaseUrl = () => "https://clerk.roocode.com";
export class RefreshTimer { start(..._args: any[]) {} stop(..._args: any[]) {} }
export class RetryQueue { enqueue(..._args: any[]) {} }
export class CloudAPI { shareTask(..._args: any[]) { return Promise.resolve({}); } creditBalance(..._args: any[]) { return Promise.resolve(0); } bridgeConfig(..._args: any[]) { return Promise.resolve({}); } }
export class CloudSettingsService { getAllowList(..._args: any[]) { return { allowAll: true, providers: {} }; } getOrganizationSettings(..._args: any[]) { return null; } }
export class CloudShareService { shareTask(..._args: any[]) { return Promise.resolve({}); } backfillMessages(..._args: any[]) { return Promise.resolve(); } }
export class TelemetryClient { captureEvent(..._args: any[]) {} }
export class WebAuthService { login(..._args: any[]) { return Promise.resolve(); } logout(..._args: any[]) { return Promise.resolve(); } handleCallback(..._args: any[]) { return Promise.resolve(); } isAuthenticated(..._args: any[]) { return false; } getUserInfo(..._args: any[]) { return null; } getOrganizationMemberships(..._args: any[]) { return Promise.resolve([]); } switchOrganization(..._args: any[]) { return Promise.resolve(); } getState(..._args: any[]) { return "logged-out"; } getSessionToken(..._args: any[]) { return undefined; } hasActiveSession(..._args: any[]) { return false; } hasOrIsAcquiringActiveSession(..._args: any[]) { return false; } getStoredOrganizationId(..._args: any[]) { return null; } broadcast(..._args: any[]) {} }
export class StaticTokenAuthService { isAuthenticated(..._args: any[]) { return false; } getUserInfo(..._args: any[]) { return null; } }
export class StaticSettingsService { getAllowList(..._args: any[]) { return { allowAll: true, providers: {} }; } getOrganizationSettings(..._args: any[]) { return null; } }
export class InvalidClientTokenError extends Error {}
