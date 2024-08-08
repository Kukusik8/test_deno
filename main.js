import { serve } from "https://deno.land/std@0.141.0/http/server.ts";

const Timestamp = function (precision = 6) {

    if (!Number.isInteger(precision)) precision = 6;
    const p = precision;

    const start = typeof performance.timeOrigin !== 'undefined' ? performance.timeOrigin : Date.now();
    const now = performance.now();

    const iso = new Date(start + now).toISOString();

    const microseconds = (((start + now) % 1000) / 1000).toFixed(p).slice(2);

    return iso.substring(0, iso.indexOf('.') + 1) + microseconds + 'Z';
};



serve(Timestamp(6))