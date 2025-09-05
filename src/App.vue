<template>
  <div class="main-container">
    <div class="waterfall-container">
      <WaterfallContainer 
        :items="testImages" 
        :columns="4"
        :fade-in-and-out="true"
        :hover-effect="true"
        :click-function="handleItemClick"
        :hover-function="handleItemHover"
        :hover-leave-function="handleItemLeave"
      >
        <!-- 自訂每個卡片的內容 -->
        <template #default="{ item, index }">
          <div class="custom-card">
            <img
              :src="item.src"
              :alt="item.alt || ''"
              class="waterfall-image"
              loading="lazy"
            />
            <div class="card-content">
              <h3>{{ item.title || `圖片 ${index + 1}` }}</h3>
              <p>{{ item.description }}</p>
              <div class="card-tags">
                <span v-for="tag in item.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </WaterfallContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testImages = ref([
  { 
    id: 1, 
    src: 'https://plus.unsplash.com/premium_photo-1755804993716-a3f19e419eaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    title: '美麗風景',
    description: '這是一張令人驚嘆的風景照片',
    tags: ['風景', '自然']
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1756758006047-efc2f2b7d493?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '星空',
    description: '這是一張令人驚嘆的星空照片',
    tags: ['星空', '夜景']
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1756819753334-3076f06c0395?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '海岸風景',
    description: '這是一張令人驚嘆的風景照片',
    tags: ['風景', '自然']
  },
  { 
    id: 4, 
    src: 'https://plus.unsplash.com/premium_photo-1698342931398-84352ce5ca20?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '森林',
    description: '陽光灑落的森林',
    tags: ['森林', '自然']
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '自然風景',
    description: '這是一張令人驚嘆的風景照片',
    tags: ['風景', '自然']
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1756888008424-86ebdcb9d6a3?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '花窗',
    description: '花窗的建築',
    tags: ['花窗', '建築']
  },
  { 
    id: 7, 
    src: 'https://images.unsplash.com/photo-1755018237360-37704d462479?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D',
    title: '城市建築',
    description: '城市建築',
    tags: ['城市', '建築']
  },
  { 
    id: 8, 
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '義大利海岸線',
    description: '義大利海岸線',
    tags: ['義大利', '海岸線']
  },
  { 
    id: 9, 
    src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbHl8ZW58MHx8MHx8fDA%3D',
    title: '威尼斯',
    description: '繁華的美麗的威尼斯',
    tags: ['水都', '水道']
  },
  { 
    id: 10, 
    src: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGl0YWx5fGVufDB8fDB8fHww',
    title: '草原',
    description: '托斯卡尼的草原',
    tags: ['草原', '托斯卡尼']
  },
  { 
    id: 11, 
    src: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGl0YWx5fGVufDB8fDB8fHww',
    title: '羅馬噴泉',
    description: '羅馬噴泉',
    tags: ['羅馬', '噴泉']
  },
  { 
    id: 12, 
    src: 'https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0YWx5fGVufDB8fDB8fHww',
    title: '聖母百花大教堂',
    description: '聖母百花大教堂',
    tags: ['佛羅倫斯', '教堂']
  },
  { 
    id: 13, 
    src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWx5fGVufDB8fDB8fHww',
    title: '羅馬競技場',
    description: '羅馬競技場',
    tags: ['羅馬', '競技場']
  },
  { 
    id: 14, 
    src: 'https://images.unsplash.com/photo-1669111957493-5decbb7418d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVya2l5ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: '卡帕多奇亞',
    description: '卡帕多奇亞熱氣球的天空',
    tags: ['卡帕多奇亞', '熱氣球']
  },
  { 
    id: 15, 
    src: 'https://plus.unsplash.com/premium_photo-1681929370844-cacbd8b46dba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2l5ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: '博斯普魯斯海峽',
    description: '橫跨歐亞大陸的海峽',
    tags: ['博斯普魯斯', '海峽']
  },
  { 
    id: 16, 
    src: 'https://images.unsplash.com/photo-1685492136271-5c2153d67544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHVya2l5ZXxlbnwwfHwwfHx8MA%3D%3D',
    title: '加拉達塔',
    description: '黃昏加拉達塔',
    tags: ['加拉達塔', '塔樓']
  },
  { 
    id: 17, 
    src: 'https://images.unsplash.com/photo-1669273808564-34d30abf972f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHx0dXJraXllfGVufDB8fDB8fHww',
    title: '聖索菲亞清真寺',
    description: '屹立一千五百年的聖索菲亞清真寺',
    tags: ['伊斯坦堡', '清真寺']
  },
  { 
    id: 18, 
    src: 'https://images.unsplash.com/photo-1694944360077-930c7511c19d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR1cmtpeWUlMjBwYW11a2thbGV8ZW58MHx8MHx8fDA%3D',
    title: '以弗所',
    description: '以弗所古城',
    tags: ['以弗所', '古城']
  },
  { 
    id: 19, 
    src: 'https://images.unsplash.com/photo-1720974613849-f5658cd8828e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '棉堡',
    description: '棉堡溫泉',
    tags: ['棉堡', '溫泉']
  },
  {
    id: 20, 
    src: 'https://images.unsplash.com/photo-1659375653731-6d88cd30fb8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHR1cmtpeWUlMjBwYW11a2thbGV8ZW58MHx8MHx8fDA%3D',
    title: '棉堡羅馬古劇場',
    description: '棉堡羅馬古劇場的遺跡',
    tags: ['羅馬', '劇場']
  },
  { 
    id: 21, 
    src: 'https://plus.unsplash.com/premium_photo-1678916185952-7e48fdf46753?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '清真寺',
    description: '清真寺',
    tags: ['土耳其', '清真寺']
  },
  { 
    id: 22, 
    src: 'https://images.unsplash.com/photo-1675346828138-2b55369765b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '卡帕多奇亞熱氣球',
    description: '卡帕多奇亞的熱氣球',
    tags: ['卡帕多奇亞', '熱氣球']
  },
])

// 點擊事件處理
const handleItemClick = (item) => {
  console.log('點擊了項目:', item)
  alert(`你點擊了: ${item.title || item.id}`)
}

// hover 事件處理
const handleItemHover = (item) => {
  console.log('Hover 項目:', item)
}

// hover 離開事件處理
const handleItemLeave = (item) => {
  console.log('離開 Hover 項目:', item)
}
</script>

<style scoped>
.main-container{
  width: 100%;
  background-color: #2f2f2f;
  padding:2rem 0;
}

.waterfall-container{
  position: relative;
  width: 80vw;
  height: 100%;
  margin: 0 auto;
}

.custom-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.waterfall-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-content {
  padding: 12px;
}

.card-content h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.card-content p {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
}
</style>
