type GeoName = {
  geoname_id: number
  names: Record<string, string>
}

type Subdivision = {
  geoname_id: number
  iso_code?: string
  names: Record<string, string>
}

type Location = {
  latitude: number
  longitude: number
  time_zone: string
  weather_code: string
}

type Postal = {
  code: string
}

type Traits = {
  autonomous_system_number: number
  autonomous_system_organization: string
  connection_type: string
  isp: string
  organization: string
  user_type: string
}

export type GeographicData = {
  city: GeoName
  continent: GeoName & { code: string }
  country: GeoName & {
    is_in_european_union: boolean
    iso_code: string
  }
  location: Location
  postal: Postal
  subdivisions: Subdivision[]
  traits: Traits
}
