# tusi
Custom Date Picker

## Örnek Kod
```
<div class="calender">
    <div class="book-date"></div>
    <div class="date-viewer"></div>
    <div class="hour-viewer"></div>
</div>
<script>
    var tusi =  Tusi.create('.book-date');
    tusi.dateOnClick = function(el, instance){
        console.log('Click Date', instance.getSelectedDay());
    }
    tusi.hourOnClick = function(el, instance){
        console.log('Click Hour', instance.getSelectedHour());
    }
</script>
```
