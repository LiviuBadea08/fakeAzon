@extends('layouts.landing')

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