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

import { Payment } from '././payment';
import { Receipt } from '././receipt';
import { User } from '././user';

export class ExpenseClaim {
    /**
    * Xero generated unique identifier for an expense claim
    */
    'expenseClaimID'?: string;
    /**
    * Current status of an expense claim – see status types
    */
    'status'?: ExpenseClaim.StatusEnum;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    'user'?: User;
    'receipts'?: Array<Receipt>;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * The total of an expense claim being paid
    */
    'total'?: number;
    /**
    * The amount due to be paid for an expense claim
    */
    'amountDue'?: number;
    /**
    * The amount still to pay for an expense claim
    */
    'amountPaid'?: number;
    /**
    * The date when the expense claim is due to be paid YYYY-MM-DD
    */
    'paymentDueDate'?: string;
    /**
    * The date the expense claim will be reported in Xero YYYY-MM-DD
    */
    'reportingDate'?: string;
    /**
    * The Xero identifier for the Receipt e.g.  e59a2c7f-1306-4078-a0f3-73537afcbba9
    */
    'receiptID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expenseClaimID",
            "baseName": "ExpenseClaimID",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "ExpenseClaim.StatusEnum"
        },
        {
            "name": "payments",
            "baseName": "Payments",
            "type": "Array<Payment>"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "User"
        },
        {
            "name": "receipts",
            "baseName": "Receipts",
            "type": "Array<Receipt>"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        },
        {
            "name": "amountDue",
            "baseName": "AmountDue",
            "type": "number"
        },
        {
            "name": "amountPaid",
            "baseName": "AmountPaid",
            "type": "number"
        },
        {
            "name": "paymentDueDate",
            "baseName": "PaymentDueDate",
            "type": "string"
        },
        {
            "name": "reportingDate",
            "baseName": "ReportingDate",
            "type": "string"
        },
        {
            "name": "receiptID",
            "baseName": "ReceiptID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseClaim.attributeTypeMap;
    }
}

export namespace ExpenseClaim {
    export enum StatusEnum {
        SUBMITTED = <any> 'SUBMITTED',
        AUTHORISED = <any> 'AUTHORISED',
        PAID = <any> 'PAID',
        VOIDED = <any> 'VOIDED',
        DELETED = <any> 'DELETED'
    }
}
