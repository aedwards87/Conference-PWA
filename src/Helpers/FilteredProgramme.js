export const FilteredProgramme = ({ programme }) => {

  const filteredProgramme = { ...programme }

  delete filteredProgramme.id
  delete filteredProgramme.title
  delete filteredProgramme.time
  delete filteredProgramme.date
  delete filteredProgramme.room

  return filteredProgramme
}
