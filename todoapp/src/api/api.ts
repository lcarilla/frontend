/* tslint:disable */
/* eslint-disable */
/**
 * TODO API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'content'?: string;
}
/**
 * 
 * @export
 * @interface TodoDto
 */
export interface TodoDto {
    /**
     * 
     * @type {number}
     * @memberof TodoDto
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TodoDto
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoDto
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoDto
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof TodoDto
     */
    'progress'?: number;
}
/**
 * 
 * @export
 * @interface TodoFullDto
 */
export interface TodoFullDto {
    /**
     * 
     * @type {number}
     * @memberof TodoFullDto
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TodoFullDto
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoFullDto
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoFullDto
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof TodoFullDto
     */
    'progress'?: number;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof TodoFullDto
     */
    'comments'?: Array<Comment>;
}

/**
 * TodoControllerApi - axios parameter creator
 * @export
 */
export const TodoControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} todoId 
         * @param {number} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteComment: async (todoId: number, commentId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('deleteComment', 'todoId', todoId)
            // verify required parameter 'commentId' is not null or undefined
            assertParamExists('deleteComment', 'commentId', commentId)
            const localVarPath = `/api/v1/todos/{todoId}/comments/{commentId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)))
                .replace(`{${"commentId"}}`, encodeURIComponent(String(commentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTodo', 'id', id)
            const localVarPath = `/api/v1/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTodo', 'id', id)
            const localVarPath = `/api/v1/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {Comment} comment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postComment: async (id: number, comment: Comment, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postComment', 'id', id)
            // verify required parameter 'comment' is not null or undefined
            assertParamExists('postComment', 'comment', comment)
            const localVarPath = `/api/v1/todos/{id}/comments`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(comment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTodo: async (todoDto: TodoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoDto' is not null or undefined
            assertParamExists('postTodo', 'todoDto', todoDto)
            const localVarPath = `/api/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTodo: async (id: number, todoDto: TodoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('putTodo', 'id', id)
            // verify required parameter 'todoDto' is not null or undefined
            assertParamExists('putTodo', 'todoDto', todoDto)
            const localVarPath = `/api/v1/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OpenID required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoControllerApi - functional programming interface
 * @export
 */
export const TodoControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} todoId 
         * @param {number} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteComment(todoId: number, commentId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteComment(todoId, commentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodo(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodo(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoFullDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodos(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TodoDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodos(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {Comment} comment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postComment(id: number, comment: Comment, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoFullDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postComment(id, comment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTodo(todoDto: TodoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTodo(todoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putTodo(id: number, todoDto: TodoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putTodo(id, todoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodoControllerApi - factory interface
 * @export
 */
export const TodoControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} todoId 
         * @param {number} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteComment(todoId: number, commentId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteComment(todoId, commentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTodo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo(id: number, options?: any): AxiosPromise<TodoFullDto> {
            return localVarFp.getTodo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos(options?: any): AxiosPromise<Array<TodoDto>> {
            return localVarFp.getTodos(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {Comment} comment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postComment(id: number, comment: Comment, options?: any): AxiosPromise<TodoFullDto> {
            return localVarFp.postComment(id, comment, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTodo(todoDto: TodoDto, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.postTodo(todoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTodo(id: number, todoDto: TodoDto, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.putTodo(id, todoDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoControllerApi - object-oriented interface
 * @export
 * @class TodoControllerApi
 * @extends {BaseAPI}
 */
export class TodoControllerApi extends BaseAPI {
    /**
     * 
     * @param {number} todoId 
     * @param {number} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public deleteComment(todoId: number, commentId: number, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).deleteComment(todoId, commentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public deleteTodo(id: number, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).deleteTodo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public getTodo(id: number, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).getTodo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public getTodos(options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).getTodos(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {Comment} comment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public postComment(id: number, comment: Comment, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).postComment(id, comment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TodoDto} todoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public postTodo(todoDto: TodoDto, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).postTodo(todoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {TodoDto} todoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoControllerApi
     */
    public putTodo(id: number, todoDto: TodoDto, options?: AxiosRequestConfig) {
        return TodoControllerApiFp(this.configuration).putTodo(id, todoDto, options).then((request) => request(this.axios, this.basePath));
    }
}


