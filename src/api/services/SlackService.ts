/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from 'src/api';
import { OpenAPI_Portal } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SlackService {
  /**
   * Uploads file to slack and links it to a channel defined in config
   * @param formData
   * @returns any Success
   * @throws ApiError
   */

  public static fileUpload(formData?: FormData): CancelablePromise<unknown> {
    return __request(OpenAPI_Portal, {
      method: 'POST',
      url: '/api/v1/Slack/fileUpload',
      body: formData,
    });
  }

  /**
   * Posts a slack message to channel defined in config
   * @param formData
   * @returns any Success
   * @throws ApiError
   */

  public static postmessage(formData?: FormData): CancelablePromise<unknown> {
    return __request(OpenAPI_Portal, {
      method: 'POST',
      url: '/api/v1/Slack/postmessage',
      body: formData,
    });
  }
}
