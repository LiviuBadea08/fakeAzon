@extends('layouts.app')

@section('content')
    @foreach ($shops as $shop)
        <div id="shop-card" data={{$shop}}></div>
    @endforeach
@endsection