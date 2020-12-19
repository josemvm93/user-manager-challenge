<template>
    <div class="view-detail">
        <div class="back">
            <router-link :to="{ name: 'Users' }">
                Regresar
            </router-link>
        </div>
        <Loading v-if="loading" />
        <div v-else class="container">
            <div class="row">
                <label>Name: </label>
                <span>{{ userName }}</span>
            </div>
            <div class="row">
                <label>Email: </label>
                <span>{{ userEmail }}</span>
            </div>
        </div>
        <ErrorAlert v-if="error" :error="error" />
    </div>
</template>

<script lang="ts">
import { useGetUserReactive } from '@/compositions/useGetUserReactive'
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Loading from '@/components/common/Loading.vue'
import ErrorAlert from '@/components/common/ErrorAlert.vue'

export default defineComponent({
    name: 'UserDetailView',
    components: {
        Loading,
        ErrorAlert,
    },
    setup() {
        const idUserString = useRoute().params['userId'].toString()
        const idUser = Number.parseInt(idUserString, 10)
        const { loading, data: user, error } = useGetUserReactive(idUser)
        const userName = computed(() => {
            return user.value?.name
        })
        const userEmail = computed(() => {
            return user.value?.email
        })
        return {
            loading,
            userName,
            userEmail,
            error,
        }
    },
})
</script>

<style scoped lang="scss">
@import '@/scss/_variables';

.view-detail {
    .back {
        padding: $space-md;
        a {
            color: $color-blue-principal;
        }
    }
    .container {
        .row {
            display: flex;
            justify-content: center;
            padding: $space-md;
            align-items: baseline;
            label {
                flex: 50%;
                display: flex;
                justify-content: flex-end;
                font-size: 18px;
                font-weight: 900;
                padding-right: $space-md;
            }
            span {
                flex: 50%;
                display: flex;
                justify-content: flex-start;
                font-size: 16px;
            }
        }
    }
}
</style>
