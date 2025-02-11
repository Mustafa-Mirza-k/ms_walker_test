export const POSTGRESQL_CONNECTION_STRING =
  process.env.POSTGRESQL_CONNECTION_STRING;
export const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;
export const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET;
export const saltRounds = 10;

export const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
export const IMAGES_BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const PDF_BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const CSV_BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const SURVEY_IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_IMAGES_URL;
export const USER_PROFILE_BASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_IMAGES_URL;

export const ACCESS_TOKEN_TIME = process.env.NEXT_PUBLIC_ACCESS_TOKEN_TIME;
export const REFRESH_TOKEN_TIME = process.env.NEXT_PUBLIC_REFRESH_TOKEN_TIME;
export const Survey_Column = [
  "Display Type",
  "Supplier Name",
  "Other Supplier",
  "Item Name",
  "Other item",
  "Number of Cases",
  "Display Cost",
  "Image",
  "Action",
];
export const Survey_Table_Column = [
  "Supplier",
  "Item",
  "Account Name",
  "Account Number",
  "City",
  "Display Type",
  "Display Cost",
  "Other Supplier",
  "Other Item",
  "No of Cases",
  "Notes",
  "Status",
  "Image",
  "Action",
];
export const Survey_Sort_Keys: any = {
  Supplier: "supplier.vendorFullInfo",
  Item: "item.ItemFullInfo",
  "Account Name": "account.CUSTOMER NAME",
  "Account Number": "account.CUST NO",
  City: "account.CITY",
  "Display Type": "display.display_type",
  "Display Cost": "display_coast",
  "Other Supplier": "other_supplier",
  "Other Item": "other_item",
  "No of Cases": "number_of_cases",
  Notes: "notes",
  Status: "survey_status.status",
};

export const USER_TABLE_COLUMNS = ["Name", "Email", "Role", "Action"];
export const GROUP_TABLE_COLUMN = [
  "Group Name",
  "Access Type",
  "Member Count",
  "Is Active",
];
export const TEAM_TABLE_COLUMN = [
  "Team Name",
  "Managers",
  "Member Count",
  "Is Active",
];

export const BULK_OPERATION = [
  { id: 1, name: "Proceed" },
  { id: 2, name: "Approve" },
  { id: 3, name: "Complete" },
  { id: 4, name: "Reject" },
  { id: 5, name: "Delete" },
];
export const EXPORT_OPTIONS = [
  { id: 1, file_name: "Csv" },
  { id: 2, file_name: "Pdf" },
];
export const ACTIVITY_EXPORT_OPTIONS = [{ id: 1, file_name: "Csv" }];

export const ACTIVITY_TABLE_COLUMN = [
  "ID",
  "Merch Ref Id",
  "Date",
  "Start Time",
  "End Time",
  "Account Name",
  "City",
  "Activity Log",
  "Complete",
  "Notes",
  "Number of Cases",
];
export const SURVEY_SORT_KEYS: any = {
  ID: "id",
  "Merch Ref Id": "merch_rep_id",
  Date: "created_at",
  "Start Time": "start_time",
  "End Time": "end_time",
  "Account Name": "activity_account.CUSTOMER NAME",
  City: "activity_account.CITY",
  "Activity Log": "activity_log",
  Complete: "is_complete",
  Notes: "notes",
  "Number of Cases": "",
};

export const base64OfLogo =
  "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";
