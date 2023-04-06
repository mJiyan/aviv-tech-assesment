import axios from "axios";

import { Maybe } from "@/types";

import { HTTP, MAX_REVIEW_FILES_SIZE } from './const';


type ApiCallProps = {
  url: string,
  data: Maybe<Record<string, unknown>>,
  params: Maybe<string>,
  method: HTTP,
  headers: any
}

const apiCall = async ({ url = '', data = null, params = null, method = HTTP.GET, headers }: ApiCallProps) =>
    axios({
        url,
        data,
        params,
        method,
        headers: {
            ...headers,
        },
        maxContentLength: MAX_REVIEW_FILES_SIZE,
    })
        .then((p) => p)
        .catch((err) => {
            throw err
        })

export default apiCall;
