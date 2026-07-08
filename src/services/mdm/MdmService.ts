// Stub for MDM service (Cloud/Account system removed)
export class MdmService {
	static instance = new MdmService()
	async init(..._args: any[]) {}
	async getOrganizationAllowList(..._args: any[]): Promise<{ allowAll: boolean; providers: Record<string, { allowAll: boolean; models?: string[] }> }> { return { allowAll: true, providers: {} } }
}
