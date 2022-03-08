<template>
  <div class="details">
    <VHeader backTo="/orders">
      Детали заказа
    </VHeader>
    <div class="details__title">
      <h3 class="details__title--name title">ChocoCafe</h3>
      <span class="details__location text">1.2 км • Коктем 3-й микрорайон </span>
    </div>

    <div class="details__status">
      <h4 class="details__status--title title-secondary">Статус заказа</h4>
      <span class="details__status--info">Завершен</span>
      <h4 class="details__status--title title-secondary">Дата</h4>
      <span class="details__status--info">22.04.2021, 12:43</span>
      <h4 class="details__status--title .title-secondary">Номер заказа</h4>
      <span class="details__status--info">№3161389</span>
    </div>
     
    <div class="position">
      <h4 class="position__title title-secondary">Позиции в заказе</h4>
      <span class="position__info">1 х Паста спагетти Алио и Олио <span>3 900 тг</span></span>
      <span class="position__info">1 х Кока кола <span>3 900 тг</span></span>
      <span class="position__info">1 х Бурег с говядиной  <span>2 500 тг</span></span>
    </div> 
    <div class="total">
      Итого <span>6 900 тг</span>
    </div>
    <VNavbar/>
  </div>
    
</template>

<script>
  import VNavbar from '../components/navbar'
  import VHeader from '../components/header'
  export default {
    components: { VNavbar, VHeader },
      
  }
</script>

<style scoped>

.title-secondary {
  font-size: .9rem;
  color: var(--text-grey);
  
}
.details__title {
  background-color: white;
  padding: 1.25rem 1rem 0.75rem;
  border-bottom: 1px solid #ECECEC;
  line-height: 1.5rem;
}
.details__title hr {
  margin: 1rem 1rem 0;
}
.details__status {
  background-color: white;
  padding: 1rem ;
}

.details__status--info {
  font-size: .9rem;
  color: var(--text-primary);
  margin: .5rem 0 1rem;
  display: block;
}
.position {
  background-color: white;
  border-bottom: 1px solid #ECECEC;
  margin-top: .5rem;
  padding: 1rem 1rem .5rem;
}
.position__info {
  font-size: .95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .75rem;
}
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1rem ;
  font-size: .9rem;
  font-weight: 700;
}
</style>