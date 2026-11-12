<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, theme } = useData()

const STATUS_LABEL: Record<string, string> = {
  'not-started': 'Not started',
  reading: 'Reading',
  practiced: 'Practiced',
  understood: 'Understood',
}
const STATUSES = Object.keys(STATUS_LABEL)

const isChapter = computed(() => frontmatter.value.chapter != null)
const tier = computed(() => frontmatter.value.tier ?? 'core')

// Each reader's own status, kept in their browser only. Read after mount so the
// server-rendered page (always "Not started") hydrates without a mismatch.
const STORAGE_KEY = 'ai-engineering:status'
const status = ref('not-started')

function readAll(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function load() {
  const saved = readAll()[String(frontmatter.value.chapter)]
  status.value = STATUSES.includes(saved) ? saved : 'not-started'
}

function cycle() {
  status.value = STATUSES[(STATUSES.indexOf(status.value) + 1) % STATUSES.length]
  const all = readAll()
  all[String(frontmatter.value.chapter)] = status.value
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {}
}

onMounted(load)
watch(() => frontmatter.value.chapter, load)
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
    <button
      type="button"
      class="badge status"
      :class="`status-${status}`"
      title="Your progress, saved in this browser. Click to change."
      @click="cycle"
    >{{ STATUS_LABEL[status] }}</button>
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
