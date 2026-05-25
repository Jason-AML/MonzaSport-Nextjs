

import { createClient } from "@/lib/server"


export const getCollections = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('vehiculos').select('*')
    if (error) {
       throw new Error(error.message)
    }
    return data
}
    