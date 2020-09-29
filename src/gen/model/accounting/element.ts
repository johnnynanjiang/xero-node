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

import { ValidationError } from '././validationError';

export class Element {
    /**
    * Array of Validation Error message
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Unique ID for batch payment object with validation error
    */
    'batchPaymentID'?: string;
    'bankTransactionID'?: string;
    'creditNoteID'?: string;
    'contactID'?: string;
    'invoiceID'?: string;
    'itemID'?: string;
    'purchaseOrderID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        },
        {
            "name": "batchPaymentID",
            "baseName": "BatchPaymentID",
            "type": "string"
        },
        {
            "name": "bankTransactionID",
            "baseName": "BankTransactionID",
            "type": "string"
        },
        {
            "name": "creditNoteID",
            "baseName": "CreditNoteID",
            "type": "string"
        },
        {
            "name": "contactID",
            "baseName": "ContactID",
            "type": "string"
        },
        {
            "name": "invoiceID",
            "baseName": "InvoiceID",
            "type": "string"
        },
        {
            "name": "itemID",
            "baseName": "ItemID",
            "type": "string"
        },
        {
            "name": "purchaseOrderID",
            "baseName": "PurchaseOrderID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Element.attributeTypeMap;
    }
}

