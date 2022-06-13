@extends('layouts.app')

@section('content')
    @foreach ($shops as $shop)
        <div id="card" data={{$shop}}></div>
    @endforeach
    

    <div id="showproduct"></div>   dsa 
    

@endsection