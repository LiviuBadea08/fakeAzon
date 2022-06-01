@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ Auth::user()->id }} <br>
                    {{ Auth::user()->name }} <br> 
                    {{ Auth::user()->rol->first()->name; }} <br>
                    {{ Auth::user()->email }} <br>
                    {{ Auth::user()->password }} <br>

                    @foreach (Auth::user()->shop as $shop)
                        {{ $shop->name }} <br>
                        @foreach ( $shop->product as $product )
                            {{ $product->name}}<br>
                        @endforeach
                    @endforeach
                    

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
