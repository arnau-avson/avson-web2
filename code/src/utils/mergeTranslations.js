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

    const merged = {
      ...item,
      tag: translated.tag || item.tag,
      title: translated.title || item.title,
      items: translated.items || item.items,
    }

    // Handle both 'description' (normativas) and 'desc' (innovations)
    if ('description' in item) {
      merged.description = translated.description || item.description
    }
    if ('desc' in item) {
      merged.desc = translated.desc || item.desc
    }

    return merged
  })
}
