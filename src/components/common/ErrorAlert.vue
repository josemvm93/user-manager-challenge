<template>
    <div
        class="error-container"
        v-bind:class="{ danger: isDanger, warning: isWarning }"
    >
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">
import { ErrorType, Error } from '@/compositions/responseData'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'ErrorAlert',
    props: {
        error: Object as PropType<Error>,
    },
    computed: {
        message(): string {
            return this.error ? this.error.message : 'Error'
        },
        type(): ErrorType | null {
            return this.error ? this.error.type : null
        },
        isDanger(): boolean {
            return this.type === ErrorType.danger
        },
        isWarning(): boolean {
            return this.type === ErrorType.warning
        },
    },
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';

.error-container {
    color: $color-white;
    padding: $space-md;
    &.danger {
        background-color: $color-danger;
    }
    &.warning {
        background-color: $color-warning;
    }
}
</style>
