@extends('layouts.app')

@section('content')
    @foreach ($shops as $shop)
        <div id="card" data={{$shop}}></div>
    @endforeach
    <div id="buttons"></div>

    <div id="label"></div>

@endsection