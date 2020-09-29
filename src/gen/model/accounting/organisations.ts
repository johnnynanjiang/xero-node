/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Organisation } from '././organisation';

export class Organisations {
    'organisations'?: Array<Organisation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "organisations",
            "baseName": "Organisations",
            "type": "Array<Organisation>"
        }    ];

    static getAttributeTypeMap() {
        return Organisations.attributeTypeMap;
    }
}

