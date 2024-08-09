/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImpersonateUser } from '../models/ImpersonateUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI_Portal } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ImpersonateUserService {
  /**
   * Get all impersonate users
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static getApiV1ImpersonateUser(): CancelablePromise<
    Array<ImpersonateUser>
  > {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser',
      errors: {
        400: `Bad Request`,
        500: `Server Error`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static createImpersonateUser(
    requestBody?: ImpersonateUser
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'POST',
      url: '/api/v1/ImpersonateUser',
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
        500: `Server Error`,
      },
    });
  }
  /**
   * Edits or Creates a impersonate user if it doesnt exist.
   * @param requestBody
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static putImpersonateUser(
    requestBody?: ImpersonateUser
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'PUT',
      url: '/api/v1/ImpersonateUser',
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get all active users
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static getAllActiveUsers(): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser/ActiveUsers',
      errors: {
        400: `Bad Request`,
        500: `Server Error`,
      },
    });
  }
  /**
   * Get active user by username
   * @param username
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static getActiveUserByUsername(
    username?: string
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser/ActiveUserByUsername',
      query: {
        username: username,
      },
      errors: {
        400: `Bad Request`,
        500: `Server Error`,
      },
    });
  }
  /**
   * Get impersonate user by id
   * @param id
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static getImpersonateUserById(
    id?: string
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser/ImpersonateUser',
      query: {
        id: id,
      },
      errors: {
        400: `Bad Request`,
        500: `Server Error`,
      },
    });
  }
  /**
   * Get impersonate user by username
   * @param username
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static getImpersonateUserByUserName(
    username?: string
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser/ImpersonateUserByUserName',
      query: {
        username: username,
      },
      errors: {
        400: `Bad Request`,
        500: `Server Error`,
      },
    });
  }
  /**
   * @returns boolean Success
   * @throws ApiError
   */
  public static canImpersonate(): CancelablePromise<boolean> {
    return __request(OpenAPI_Portal, {
      method: 'GET',
      url: '/api/v1/ImpersonateUser/CanImpersonate',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
        500: `Server Error`,
      },
    });
  }
  /**
   * @param username
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static startImpersonating(
    username?: string
  ): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'PUT',
      url: '/api/v1/ImpersonateUser/StartImpersonating',
      query: {
        username: username,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
        500: `Server Error`,
      },
    });
  }
  /**
   * @returns ImpersonateUser Success
   * @throws ApiError
   */
  public static stopImpersonating(): CancelablePromise<ImpersonateUser> {
    return __request(OpenAPI_Portal, {
      method: 'PUT',
      url: '/api/v1/ImpersonateUser/StopImpersonating',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
        500: `Server Error`,
      },
    });
  }
}
