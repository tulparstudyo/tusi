var Tusi = {
    e:null,
    dv:null,
    doc:null,
    hw:null,
    mt:null,
    strt_d:null,
    end_d:null,
    dateOnClick:null,
    hourOnClick:null,
    create: function (s){
        if($(s).length!=1){
            console.log('geçersiz dom seçici');
            return null;
        }
        e = $(s)[0];
        this.s = s;
        this.dv = '.date-viewer';
        this.hv = '.hour-viewer';
        this.e = e;
        this.date = new Date();
        this.sd = new Date() ;
        this.sh = '' ;
        this.ch();
        this.cd_s();
        this.chs();
        return this;
    },
    ch: function(){
        this.mt = document.createElement("div");
        this.mt.className = 'tusi-month'
        this.e.append(this.mt);
        this.mt.innerHTML= this.get_month_name(this.date.getMonth());

        let el = document.createElement("div");
        el.className = 'tusi-navigate'

        let prb = document.createElement("div");
        prb.className = 'tusi-nav prev'
        prb.innerText = '<';
        prb.addEventListener('click', function(){
            self.Tusi.prev_day()
        });
        el.append(prb);

        this.date_s = document.createElement("ul");
        el.append(this.date_s);

        let nxb = document.createElement("div");
        nxb.className = 'tusi-nav next'
        nxb.innerText = '>';
        nxb.addEventListener('click', function(){
            self.Tusi.next_day();
        });
        el.append(nxb);

        this.e.append(el);

        this.hour_s = document.createElement("ul");
        this.hour_s.className = 'tusi-hour'
        this.e.append(this.hour_s);
    },
    cd_s: function(){
        this.mt.innerHTML=this.get_month_name(this.date.getMonth());
        let temp =   this.date;
        this.strt_d = new Date(temp.setDate(temp.getDate() - 4));
        this.end_d =  new Date(temp.setDate(temp.getDate() +7));
        this.date_s.innerHTML='';
        for(i=0;i<7;i++){
            let xx = new Date(this.strt_d.setDate(this.strt_d.getDate() + 1 ));
            let li = document.createElement("li");
            li.setAttribute('date', xx.getTime());
            li.innerHTML = xx.getDate() + '<br>' + this.get_month_shortname(xx.getMonth());;
            if(this.sd && this.sd.toLocaleDateString('en-GB') == xx.toLocaleDateString('en-GB')){
                li.className = 'selected';
            }
            li.addEventListener('click', function(){
                self.Tusi._click_date(this, self.Tusi);
            });
            this.date_s.append(li);
        }
    },
    chs: function(){
        this.hour_s.innerHTML='';
        for(i=8; i<20; i++){
            let li = document.createElement("li");
            li.innerText = i + ':00';
            li.setAttribute('hour', li.innerText);
            li.addEventListener('click', function(){
                self.Tusi.sh = li.innerText;
                self.Tusi._click_hour(this, self.Tusi);
            });
            this.hour_s.append(li);
        }
    },
    prev_day: function(){
        let temp =   this.date;
        this.date = new Date(temp.setDate(temp.getDate() - 4));
        this.cd_s();
    },
    next_day: function(){
        let temp =   this.date;
        this.date = new Date(temp.setDate(temp.getDate() - 2));
        this.cd_s();
    },
    get_month_name: function(month){
        let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        return months[month];
    },
    get_month_shortname: function(month){
        let months = ['Oc', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Ey', 'Ek', 'Kas', 'Ara'];
        return months[month];
    },
    getSelectedDate: function(){
        return this.sd;
    },
    getSelectedDay: function(){
        return this.sd.toLocaleDateString('en-GB');
    },
    getSelectedHour: function(){
        return this.sh; 
    },
    _click_date: function(el, instance){
        $('body .tusi-navigate li').removeClass('selected');
        $(el).addClass('selected');
        instance.sd = new Date(el.getAttribute('date')*1);
        $( instance.dv ).html(instance.sd.toLocaleDateString('en-GB'));
        if(instance.dateOnClick){
            instance.dateOnClick(el, instance);
        }
    },
    _click_hour: function(el, instance){
        $('body .tusi-hour li').removeClass('selected');
        $(el).addClass('selected');
        $( instance.dv ).html(instance.sd.toLocaleDateString('en-GB'));
        $(instance.hv).html(el.getAttribute('hour'));
        if(instance.hourOnClick){
            instance.hourOnClick(el, instance);
        }
    }
}
