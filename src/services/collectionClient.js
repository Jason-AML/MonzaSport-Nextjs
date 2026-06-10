import { createClient } from "@/lib/client";
import { cache } from "react";

export const getCollections = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('vehiculos').select('*')
    if (error) {
       throw new Error(error.message)
    }   
    return data
}

export const getCollectionByYear = async (year) => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('vehiculos').select('*').eq('anio', year)
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export const getFabricas = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('fabricas').select('fabricante')
    if (error) {    
        throw new Error(error.message)
    }
    return data
}

export const getCollectionById = cache(async (id) => {    
    const supabase = await createClient()
    const { data, error } = await supabase.from('vehiculos').select('*, fabricas(*),stored(*)').eq('id', id).single()
    if (error) {
        throw new Error(error.message)
    }   
    return data
})