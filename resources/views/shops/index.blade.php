@extends('layouts.app')

@section('content')
    @foreach ($shops as $shop)
        <div id="card" data={{$shop}}></div>
    @endforeach
@endsection