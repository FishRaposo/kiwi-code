export class TelemetryService {
	static instance = new TelemetryService()
	captureEvent() {}
	captureException() {}
	captureTaskCreated() {}
	captureTaskRestarted() {}
	captureTaskCompleted() {}
	captureConversationMessage() {}
	captureLlmCompletion() {}
	captureModeSwitch() {}
	captureToolUsage() {}
	captureCheckpointCreated() {}
	captureCheckpointDiffed() {}
	captureCheckpointRestored() {}
	captureContextCondensed() {}
	captureSlidingWindowTruncation() {}
	captureCodeActionUsed() {}
	capturePromptEnhanced() {}
	captureSchemaValidationError() {}
	captureDiffApplicationError() {}
	captureShellIntegrationError() {}
	captureConsecutiveMistakeError() {}
	captureTabShown() {}
	captureModeSettingChanged() {}
	captureCustomModeCreated() {}
	captureMarketplaceItemInstalled() {}
	captureMarketplaceItemRemoved() {}
	captureTitleButtonClicked() {}
	captureTelemetrySettingsChanged() {}
	updateTelemetryState() {}
	isTelemetryEnabled() { return false }
	setProvider() {}
	shutdown() {}
	static createInstance() { return TelemetryService.instance }
	static hasInstance() { return true }
}

export const TelemetryEventName = {}
export type TelemetryEventName = any
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
