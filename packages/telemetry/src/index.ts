export class TelemetryService {
	static instance = new TelemetryService()
	captureEvent(..._args: any[]) {}
	captureException(..._args: any[]) {}
	captureTaskCreated(..._args: any[]) {}
	captureTaskRestarted(..._args: any[]) {}
	captureTaskCompleted(..._args: any[]) {}
	captureConversationMessage(..._args: any[]) {}
	captureLlmCompletion(..._args: any[]) {}
	captureModeSwitch(..._args: any[]) {}
	captureToolUsage(..._args: any[]) {}
	captureCheckpointCreated(..._args: any[]) {}
	captureCheckpointDiffed(..._args: any[]) {}
	captureCheckpointRestored(..._args: any[]) {}
	captureContextCondensed(..._args: any[]) {}
	captureSlidingWindowTruncation(..._args: any[]) {}
	captureCodeActionUsed(..._args: any[]) {}
	capturePromptEnhanced(..._args: any[]) {}
	captureSchemaValidationError(..._args: any[]) {}
	captureDiffApplicationError(..._args: any[]) {}
	captureShellIntegrationError(..._args: any[]) {}
	captureConsecutiveMistakeError(..._args: any[]) {}
	captureTabShown(..._args: any[]) {}
	captureModeSettingChanged(..._args: any[]) {}
	captureCustomModeCreated(..._args: any[]) {}
	captureMarketplaceItemInstalled(..._args: any[]) {}
	captureMarketplaceItemRemoved(..._args: any[]) {}
	captureTitleButtonClicked(..._args: any[]) {}
	captureTelemetrySettingsChanged(..._args: any[]) {}
	updateTelemetryState(..._args: any[]) {}
	register(..._args: any[]) {}
	setProvider(..._args: any[]) {}
	shutdown() {}
	static createInstance(..._args: any[]) { return TelemetryService.instance }
	static hasInstance() { return true }
}

export const TelemetryEventName = {}
export type TelemetryEventName = any
export class PostHogTelemetryClient {}
export type TelemetryClient = any
export type TelemetryPropertiesProvider = any
export type TelemetryProperties = any
export type TelemetryEvent = any
export type TelemetrySetting = any
export type TelemetryEventSubscription = any
export function getErrorStatusCode() { return undefined }
export function getErrorMessage() { return undefined }
export function shouldReportApiErrorToTelemetry() { return false }
export function isApiProviderError() { return false }
export function extractApiProviderErrorProperties() { return {} }
export function isConsecutiveMistakeError() { return false }
export function extractConsecutiveMistakeErrorProperties() { return {} }
