<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class world extends Model
{
    use HasFactory;

    // Table Name
    protected $table = 'worlds';
    // Primary Key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;
}