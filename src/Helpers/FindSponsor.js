import { exhibitors } from '../Components/index'


export const FindSponsor = (data) => {
  const sponsorID = exhibitors
    .filter(sponsor => data.sponsoredBy === sponsor.name)
    .map(sponsor => sponsor.id)

  const sponsor = data.sponsoredBy.toLowerCase().replace(/\s+/g, '')

  return { sponsorID, sponsor }
}
