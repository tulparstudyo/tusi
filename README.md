# tusi
Custom Date Picker. For in memory of [Nasir al-Din Tusi](https://en.wikipedia.org/wiki/Nasir_al-Din_al-Tusi)

## Example Code
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
## Preview
![image](https://github.com/tulparstudyo/tusi/assets/37733016/bc7543b1-8dba-4c48-a96d-29c29a2f8f56)

