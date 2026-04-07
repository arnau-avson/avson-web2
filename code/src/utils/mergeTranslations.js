/**
 * Merges translated content with hardcoded styling properties
 * Takes styling from hardcodedData and content from translatedData
 */
export function mergeTranslatedData(hardcodedData, translatedData) {
  if (!Array.isArray(translatedData)) {
    return hardcodedData
  }

  return hardcodedData.map((item, index) => {
    const translated = translatedData[index]
    if (!translated) return item
    return { ...item, ...translated }
  })
}
