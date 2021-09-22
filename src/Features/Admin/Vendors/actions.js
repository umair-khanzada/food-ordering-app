import { DELETE_VENDOR_BY_ID, FETCH_VENDORS, FETCH_VENDOR_BY_ID, UPDATE_VENDOR_BY_ID } from './ActionTypes';

export const fetchVendors = (data) => ({ type: FETCH_VENDORS, payload: data });
export const fetchVendorById = (data) => ({ type: FETCH_VENDOR_BY_ID, payload: data });
export const updateVendorById = (data) => ({ type: UPDATE_VENDOR_BY_ID, payload: data });
export const deleteVendorById = (data) => ({ type: DELETE_VENDOR_BY_ID, payload: data });
