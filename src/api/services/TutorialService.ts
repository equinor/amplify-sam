/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { CancelablePromise, Tutorial } from 'src/api';
import { OpenAPI_Portal_Prod } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TutorialService {
  /**
   * Gets all tutorials for Application
   * @param applicationName
   * @returns Tutorial Success
   * @throws ApiError
   */
  public static getTutorialsForApplication(
    applicationName: string
  ): CancelablePromise<Array<Tutorial>> {
    return __request(OpenAPI_Portal_Prod, {
      method: 'GET',
      url: '/api/v1/Tutorial/{applicationName}',
      path: {
        applicationName: applicationName,
      },
    });
  }
  /**
   * Get A SAS token for Tutorial image container
   * @returns string Success
   * @throws ApiError
   */
  public static getTutorialSasToken(): CancelablePromise<string> {
    return __request(OpenAPI_Portal_Prod, {
      method: 'GET',
      url: '/api/v1/Tutorial/SASToken',
    });
  }
}
