// TypeScript doesn't do any of this magic (see here for more details).
// In order for TypeScript to consume the module you need to change the redux-logger.d.ts declaration file to actually reflect what is going on:
/// <reference path="../redux/redux.d.ts" />

declare module 'redux-logger' {
    function createLogger(
        options?: createLogger.ReduxLoggerOptions
    ): Redux.Middlare;

    namespace createLogger {
        interface ReduxLoggerOptions {
            actionTransformer?: (action: any) => any;
            collapsed?: boolean;
            duration?: boolean;
            level?: string;
            logger?: any;
            predicate?: (getState: Function, action: any) => boolean;
            timestamp?: boolean;
            transformer?: (state: any) => any;
        }
    }

    export = createLogger;
}
