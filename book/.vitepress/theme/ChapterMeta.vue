<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, theme } = useData()

const STATUS_LABEL: Record<string, string> = {
  'not-started': 'Not started',
  reading: 'Reading',
  practiced: 'Practiced',
  understood: 'Understood',
}

const isChapter = computed(() => frontmatter.value.chapter != null)
const tier = computed(() => frontmatter.value.tier ?? 'core')
const status = computed(() => frontmatter.value.status ?? 'not-started')
// YAML parses an unquoted date into a Date (rendered as a full ISO timestamp)
const verified = computed(() => {
  const v = frontmatter.value.last_verified
  return v instanceof Date ? v.toISOString().slice(0, 10) : v ? String(v).slice(0, 10) : ''
})
const needs = computed(() =>
  (frontmatter.value.needs ?? []).map((raw: unknown) => {
    const id = String(raw)
    const ch = theme.value.chapters?.find((c: { id: string }) => c.id === id)
    return { id, title: ch?.title, link: ch ? withBase(ch.link) : undefined }
  }),
)
</script>

<template>
  <div v-if="isChapter" class="chapter-meta">
    <span class="badge" :class="`tier-${tier}`">{{ tier === 'deeper' ? 'Deeper' : 'Core' }}</span>
    <span class="badge" :class="`status-${status}`">{{ STATUS_LABEL[status] ?? status }}</span>
    <span v-if="verified" class="verified">verified {{ verified }}</span>
    <span v-if="needs.length" class="needs">
      Needs:
      <template v-for="(n, i) in needs" :key="n.id">
        <a v-if="n.link" :href="n.link" :title="n.title">{{ n.id }}</a>
        <span v-else :title="'chapter not found'">{{ n.id }}?</span><span v-if="i < needs.length - 1">, </span>
      </template>
    </span>
  </div>
</template>
