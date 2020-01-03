import React from 'react'

export const SpeakerData = (programme, speakers, id) => {

  // Find the speakers data from day one of the programme
  const getSpeakerData = programme.filter(programmeDetails =>
    programmeDetails.speakers.find(speaker => speaker === speakers[id].name)
  )

  // Find the speakers streamed session(s) data from day one of the programme
  const getSpeakerStreamData = programme
    .map(prog => prog.stream
      .filter(stream => stream.speakers
        .find(speaker => speaker === speakers[id].name)
      )
    )
    .flat()

  // Combine data
  const speakerData = [...getSpeakerData.concat(getSpeakerStreamData)]

  // Sort data by time
  speakerData.sort((a, b) => (a.time < b.time ? -1 : 1))

  return speakerData
}
