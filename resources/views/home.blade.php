@extends('layouts.app')

@section('content')
<div class="container">
    @foreach ($shops as $shop)
        <div id="main-card" name={{$shop->name}} products={{$shop->product}} />
    @endforeach
</div>
@endsection
