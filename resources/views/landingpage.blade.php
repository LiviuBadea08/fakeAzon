@extends('layouts.landing')

@section('content')
<a href="/">

    <div class=" flex flex-col h-screen justify-center bg-setBlue-300    " >

        
        <!-- <div class=" " >
            <i class="fa-solid fa-bag-shopping text-setOrange text-6xl" ></i>
            <i class="fa-solid fa-bag-shopping text-setOrange text-6xl" ></i>
        </div> -->
        
        <div class="self-center " >
            <img class=" scale-[2]"
            src="https://i.postimg.cc/HLXqL6R7/factozon-logo.png" 
            alt="" ></img>
        </div>
    </div>
</a>
        
@endsection

@extends('layouts.welcome')
@section('content')

<div class="animation">
        <h1 class="heading-primary">
            <span class="logo"><img src="https://i.postimg.cc/HLXqL6R7/factozon-logo.png"></span>
            <span class="phrase">Todo a tu alcance</span>
        </h1>
</div>
</div>

<script>
     setTimeout(function(){
    window.location=' {{ route('home') }}';
    }, 3000);
</script>

@endsection